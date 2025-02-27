import { AutoEnvAttributes, ReactNativeLDClient } from '@launchdarkly/react-native-client-sdk';
import { useStoreFeatureFlags } from '../stores';

const clientMobileKey = 'mob-d12364d5-58b4-4bbf-bdd6-5748b2911f2c';
const client = new ReactNativeLDClient(clientMobileKey, AutoEnvAttributes.Enabled, {
  debug: true,
  pollInterval: 30,
});
client.setConnectionMode('streaming');
client.on('change', () => {
  useStoreFeatureFlags.getState().setFeatureFlags(client.allFlags());
});

export { client };
