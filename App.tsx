```
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
    flex: 1,
  };

  const openAccessibilitySettings = () => {
    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.ACCESSIBILITY_SETTINGS');
    } else {
      Alert.alert('Not supported', 'This feature is Android only.');
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
          Gesture Control App
        </Text>
        <Text style={[styles.description, {color: isDarkMode ? '#ccc' : '#333'}]}>
          This app runs in the background to detect scroll gestures using your camera.
        </Text>
        
        <View style={styles.stepContainer}>
          <Text style={[styles.stepTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
            Step 1: Enable Accessibility Service
          </Text>
          <Text style={[styles.stepDesc, {color: isDarkMode ? '#ccc' : '#555'}]}>
            Go to checks settings and enable "GestureControlApp" service.
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={openAccessibilitySettings}>
            <Text style={styles.buttonText}>Open Settings</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.note, {color: isDarkMode ? '#ccc' : '#555'}]}>
          Note via: Code requires OpenCV. Ensure you have the OpenCV Android SDK integrated or the dependency resolves correctly.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  stepContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#rgba(100, 100, 100, 0.1)',
    marginBottom: 20,
    alignItems: 'center',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  stepDesc: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default App;
```
