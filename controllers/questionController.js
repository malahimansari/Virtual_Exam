import Question from '../models/Question.js';

// Controller functions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createQuestion = async (req, res) => {
  const { text, options, correctAnswer } = req.body;

  try {
    const newQuestion = await Question.create({ text, options, correctAnswer });
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export default {getAllQuestions, createQuestion};
