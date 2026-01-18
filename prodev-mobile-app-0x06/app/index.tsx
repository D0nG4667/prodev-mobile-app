import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO, GOOGLELOGO, FACEBOOKLOGO } from '../constants';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} resizeMode="cover" style={styles.backgroundImageContainer}>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.logoContainer}>
                <Image source={HEROLOGO} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome to ProDev</Text>
            </View>
            <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>Join our community of developers</Text>
            </View>
            
            <View style={{ flex: 1 }} /> 

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/signin')}>
                    <Text style={styles.buttonPrimaryText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/join')}>
                     <Text style={styles.buttonSecondaryText}>Join Now</Text>
                </TouchableOpacity>
            </View>
            
             <View style={styles.buttonGroupSubText}>
                <Text style={styles.titleSubText}>Or continue with</Text>
                 <Image source={GOOGLELOGO} />
                 <Image source={FACEBOOKLOGO} />
            </View>
             <View style={{height: 50}}/>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
