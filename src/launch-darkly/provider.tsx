import { LDProvider } from '@launchdarkly/react-native-client-sdk';
import { client } from './client';

const LaunchDarklyProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LDProvider client={client}>{children}</LDProvider>;
};

export default LaunchDarklyProvider;
