const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const BASE_DIRECTORY = process.cwd();

const CONFIG_FILE = path.join(BASE_DIRECTORY, 'config.json');

const ENVIRONMENT = process.env.RN_ENVIRONMENT || 'development';

const OVERRIDE_ENVIRONMENT_VARIABLES = {};

const envFiles = fs
  .readdirSync(BASE_DIRECTORY)
  .filter(v => v.startsWith('.env'));

const selectedEnvFile =
  ENVIRONMENT === 'development'
    ? '.env'
    : envFiles.find(v => v.startsWith(`.env.${ENVIRONMENT}`)) || '';

const baseConfig = getConfig(selectedEnvFile);
const overrideConfig = getConfig(
  selectedEnvFile.replace(/\.env/, '.env.override')
);

const config = {
  ...baseConfig,
  ...overrideConfig,
  ...OVERRIDE_ENVIRONMENT_VARIABLES,
};

fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, 0, 4));

module.exports = {};

function getConfig(file) {
  const location = path.join(BASE_DIRECTORY, file);
  if (fs.existsSync(location)) {
    return dotenv.config({ path: location }).parsed;
  }
  return {};
}
