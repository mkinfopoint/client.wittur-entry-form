'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();

    const templates = [
      { name: 'Website Password' },
      { name: 'SSL Certificate' },
      { name: 'API Keys' },
      { name: 'Database Credentials' },
      { name: 'Cryptocurrency Wallets' },
      { name: 'VPN Credentials' },
      { name: 'Financial Account Credentials' },
      { name: 'Social Media Accounts' },
      { name: 'Software Licenses' },
      { name: 'Wi-Fi Credentials' },
    ];
    

    // Insert templates
    await queryInterface.bulkInsert(
      'CredWalletTemplates',
      templates.map((t) => ({
        name: t.name,
        createdAt: timestamp,
        updatedAt: timestamp,
      }))
    );

    // Fetch inserted templates
    const insertedTemplates = await queryInterface.sequelize.query(
      'SELECT id, name FROM `CredWalletTemplates`;', // ✅ Use backticks for MariaDB
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Define fields for each template
    const templateFields = {
      'Website Password': [
        { label: 'Website Name', fieldType: 'text', encryption: false },
        { label: 'URL', fieldType: 'url', encryption: false },
        { label: 'Username/Email', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Two-Factor Authentication', fieldType: 'text', encryption: true },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'SSL Certificate': [
        { label: 'Domain Name', fieldType: 'text', encryption: false },
        { label: 'Certificate Type', fieldType: 'dropdown', options: ['SSL', 'TLS'], encryption: false },
        { label: 'Expiration Date', fieldType: 'date', encryption: false },
        { label: 'Private Key', fieldType: 'password', encryption: true },
        { label: 'Public Key', fieldType: 'text', encryption: true },
        { label: 'Issuer Name', fieldType: 'text', encryption: false },
        { label: 'Certificate Authority', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'API Keys': [
        { label: 'Service Name', fieldType: 'text', encryption: false },
        { label: 'API Key', fieldType: 'text', encryption: true },
        { label: 'Endpoint URL', fieldType: 'text', encryption: false },
        { label: 'API Secret', fieldType: 'password', encryption: true },
        { label: 'Usage Limits', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Database Credentials': [
        { label: 'Database Name', fieldType: 'text', encryption: false },
        { label: 'Host', fieldType: 'text', encryption: false },
        { label: 'Username', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Port', fieldType: 'number', encryption: false },
        { label: 'Connection URL', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Cryptocurrency Wallets': [
        { label: 'Wallet Name', fieldType: 'text', encryption: false },
        { label: 'Cryptocurrency Type', fieldType: 'dropdown', options: ['Bitcoin', 'Ethereum', 'Litecoin'], encryption: false },
        { label: 'Wallet Address', fieldType: 'text', encryption: true },
        { label: 'Private Key', fieldType: 'password', encryption: true },
        { label: 'Public Key', fieldType: 'text', encryption: true },
        { label: 'Balance', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'VPN Credentials': [
        { label: 'VPN Service Name', fieldType: 'text', encryption: false },
        { label: 'Username', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Server Address', fieldType: 'text', encryption: false },
        { label: 'Protocol', fieldType: 'dropdown', options: ['OpenVPN', 'IKEv2', 'L2TP', 'WireGuard'], encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Financial Account Credentials': [
        { label: 'Account Name', fieldType: 'text', encryption: false },
        { label: 'Bank Name', fieldType: 'text', encryption: false },
        { label: 'Username/Email', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Account Number', fieldType: 'text', encryption: true },
        { label: 'Routing Number', fieldType: 'text', encryption: true },
        { label: 'Security Questions', fieldType: 'text', encryption: true },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Social Media Accounts': [
        { label: 'Platform Name', fieldType: 'text', encryption: false },
        { label: 'Username/Email', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Two-Factor Authentication', fieldType: 'text', encryption: true },
        { label: 'Profile Link', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Software Licenses': [
        { label: 'Software Name', fieldType: 'text', encryption: false },
        { label: 'License Key', fieldType: 'text', encryption: true },
        { label: 'Purchase Date', fieldType: 'date', encryption: false },
        { label: 'Expiry Date', fieldType: 'date', encryption: false },
        { label: 'User Name/Email', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
      'Wi-Fi Credentials': [
        { label: 'SSID (Network Name)', fieldType: 'text', encryption: false },
        { label: 'Password', fieldType: 'password', encryption: true },
        { label: 'Encryption Type', fieldType: 'dropdown', options: ['WPA2', 'WPA3'], encryption: false },
        { label: 'Router Model', fieldType: 'text', encryption: false },
        { label: 'Notes', fieldType: 'text', encryption: false },
      ],
    };
    

    // Prepare fields for bulk insert
    const fieldsData = [];
    insertedTemplates.forEach((template) => {
      const fields = templateFields[template.name] || [];
      fields.forEach((field) => {
        fieldsData.push({
          label: field.label,
          fieldType: field.fieldType,
          options: field.options ? JSON.stringify(field.options) : null,
          encryption: field.encryption ? 'true':'false',
          credWalletTemplateId: template.id,
          createdAt: timestamp,
          updatedAt: timestamp,
        });
      });
    });

    // Insert fields
    if (fieldsData.length > 0) {
      await queryInterface.bulkInsert('CredWalletFields', fieldsData);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CredWalletTemplates', null, {});
    await queryInterface.bulkDelete('CredWalletFields', null, {});
  },
};
