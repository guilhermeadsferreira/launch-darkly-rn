import { Text, TouchableOpacity, View } from 'react-native';
import { useStoreFeatureFlags } from './stores';
import { styles } from './styles';

const Home = ({ onCurrentRouteChange }: { onCurrentRouteChange: (currentRoute: string) => void }) => {
  const flags = useStoreFeatureFlags(state => state.flags);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCurrentRouteChange('login')} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      {flags.home_banner && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Titulo</Text>
          <Text style={styles.bannerText}>Subtitulo</Text>
        </View>
      )}
      <View style={styles.modules}>
        {flags.home_modules.map(module => (
          <View key={module} style={styles.module}>
            <Text style={styles.moduleText}>{module}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
