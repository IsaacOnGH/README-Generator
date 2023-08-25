// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }


const licenseBadge = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  None: '',
};

return licenseBadge[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }

  const licenseLink = {
      MIT: 'https://opensource.org/licenses/MIT',
      Apache: 'https://opensource.org/licenses/Apache-2.0',
      GPL: 'https://www.gnu.org/licenses/gpl-3.0',
      BSD: 'https://opensource.org/licenses/BSD-3-Clause',
      None: '',
  };

  return licenseLink[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  return `## License
  This project is licensed under the ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Questions](#questions)

  ${renderLicenseSection(data.license)}

  ## Installation

  ${data.installation}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
  `;
}

module.exports = generateMarkdown;
