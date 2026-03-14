require('dotenv').config();
const mongoose = require('mongoose');
const Certificate = require('./models/Certificate');

const certificatesData = [
  {
    title: "Certificate of Innovation (IIIM)",
    issuer: "IIIM",
    description: "Awarded for exceptional innovation and research methodologies demonstrated during the program.",
    pdfUrl: "/certificates/Certificate inovation .pdf",
    date: "2024",
    featured: true
  },
  {
    title: "Certificate of Participation",
    issuer: "Event Organizers",
    description: "Recognized for active participation and contribution to the event.",
    pdfUrl: "/certificates/393d1059-7fb9-4bb4-bdbd-64b8d1925d9f.pdf",
    date: "2023",
    featured: true
  },
  {
    title: "Achievement Award",
    issuer: "Tech Institute",
    description: "Awarded for successfully completing the required coursework with distinction.",
    pdfUrl: "/certificates/62e905a6-5479-43e5-b6d2-4fccd2211654.pdf",
    date: "2023",
    featured: false
  },
  {
    title: "Completion Certificate",
    issuer: "Online Academy",
    description: "Acknowledging the completion of the advanced training module.",
    pdfUrl: "/certificates/92e1f762-b8c4-48ff-a68b-e5ec21d3a7f5.pdf",
    date: "2022",
    featured: false
  },
  {
    title: "Excellence Certification",
    issuer: "Skill Development Board",
    description: "Certified for demonstrating excellence in practical implementations.",
    pdfUrl: "/certificates/f787c04f-7d83-4fbb-9b4f-21b4c329f798.pdf",
    date: "2024",
    featured: false
  }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing
    await Certificate.deleteMany({});
    console.log('Cleared existing certificates');

    // Insert new
    await Certificate.insertMany(certificatesData);
    console.log('Successfully seeded Certificates');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
