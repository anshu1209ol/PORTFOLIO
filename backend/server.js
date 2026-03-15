require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const cors = require('@fastify/cors');
const Message = require('./models/Message');
const Certificate = require('./models/Certificate');

let isDBConnected = false;

// Connect Database (cached for serverless warm restarts)
const connectDB = async () => {
  if (isDBConnected) return;
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    isDBConnected = true;
    fastify.log.info('MongoDB connected successfully');
  } catch (err) {
    fastify.log.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// App Setup (registers plugins and routes)
const setup = async () => {
  const allowedOrigin = process.env.FRONTEND_URL || '*';
  await fastify.register(cors, {
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'OPTIONS']
  });

  // Simple health check route
  fastify.get('/health', async (request, reply) => {
    return { status: 'Server is running normally.' };
  });

  // API Route to handle form submissions
  fastify.post('/api/contact', async (request, reply) => {
    try {
      const { name, email, message } = request.body;

      if (!name || !email || !message) {
        reply.code(400).send({ error: 'Please submit all required fields.' });
        return;
      }

      const newMessage = new Message({ name, email, message });
      await newMessage.save();

      reply.code(201).send({ success: true, message: 'Message saved successfully!' });
    } catch (error) {
      fastify.log.error('Error saving message:', error);
      reply.code(500).send({ error: 'Internal server error while saving message. Please check logs.' });
    }
  });

  // API Route to fetch certificates
  fastify.get('/api/certificates', async (request, reply) => {
    try {
      const certificates = await Certificate.find({}).sort({ featured: -1, createdAt: -1 });
      reply.code(200).send(certificates);
    } catch (error) {
      fastify.log.error('Error fetching certificates:', error);
      reply.code(500).send({ error: 'Failed to fetch certificates.' });
    }
  });
};

// ── Vercel Serverless Export ──────────────────────────────────────────────────
// Vercel runs this file as a serverless function — it needs an exported handler.
// For local dev, we fall through to the start() call below.
let isReady = false;
const initApp = async () => {
  if (!isReady) {
    await setup();
    await connectDB();
    await fastify.ready();
    isReady = true;
  }
};

module.exports = async (req, res) => {
  await initApp();
  fastify.server.emit('request', req, res);
};

// ── Local Dev ─────────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const start = async () => {
    try {
      await setup();
      await connectDB();
      const port = process.env.PORT || 5000;
      fastify.listen({ port, host: '0.0.0.0' }, (err, address) => {
        if (err) {
          fastify.log.error(err);
          process.exit(1);
        }
        fastify.log.info(`Server listening on ${address}`);
      });
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();
}
