import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import { savePhoto } from '../utils/fileStorage';
import { Photo } from '../types/Photo';

export default function CamScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [lastPhoto, setLastPhoto] = useState<Photo | null>(null);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function handleTakePhoto() {
    if (!cameraRef.current) return;
    const photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync();
    const saved = await savePhoto(photo.uri);
    setLastPhoto(saved);
  }

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>Permissão negada 😢</Text>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} />

      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
        <Text style={styles.buttonText}>📸 Capturar</Text>
      </TouchableOpacity>

      {lastPhoto && (
        <Text style={styles.info}>
          Salvo em: {lastPhoto.savedUri.split('/').slice(-2).join('/')}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 4 },
  button: {
    flex: 1,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 8,
  },
  buttonText: { color: '#FFF', fontSize: 18 },
  info: { textAlign: 'center', marginBottom: 10 },
});
