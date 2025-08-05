const { logger, loggerErrKey } = require('../../../shared/utils');
const path = require('path');
const { entries } = require('../../../shared/models');
const sendEmail = require('../../../shared/utils/mail');

const entriesCreate = async (req, res) => {
  try {
    const { name, email, age, phone, department } = req.body;

    console.log(req.body);

    if (!name || !email || !age || !phone || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const entryData = await entries.create({
      name,
      email,
      age,
      phone,
      department,
    });

    if (entryData) {
      await sendEmail(
        'anandnk.dev@gmail.com',
        'Welcome to Mk InfoTech',
        '',
        `<h2>🎉 New Entry Created Successfully!</h2>
    <p>Here are the details:</p>
    <ul>
      <li><strong>Name:</strong> ${entryData.name}</li>
      <li><strong>Email:</strong> ${entryData.email}</li>
      <li><strong>Age:</strong> ${entryData.age}</li>
      <li><strong>Phone:</strong> ${entryData.phone}</li>
      <li><strong>Department:</strong> ${entryData.department}</li>
      <li><strong>Created At:</strong> ${new Date(entryData.createdAt).toLocaleString()}</li>
    </ul>`
      );
    }

    res.json({ message: 'Entries created successfully', entryData });
  } catch (error) {
    logger.error(await loggerErrKey(req, error.message));
    return res
      .status(500)
      .json({ message: `entries-create failed: ${error.message}` });
  }
};

module.exports = { entriesCreate };
