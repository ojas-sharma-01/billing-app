import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const route = useRoute();
  const { username, password } = route.params;

  useEffect(() => {
    setTimeout(() => {
      const mockUserData = {
        name: username,
        username: username + '123',
        bio: 'Passionate React Native Developer',
        profileImage: 'https://example.com/profile.jpg',
        gstno: '-----',
      };
      setUserData(mockUserData);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.name}>Profile</Text>
      {userData ? (
        <>
          <Image style={styles.profileImage} source={{ uri: userData.profileImage }} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.username}>@{userData.username}</Text>
          <Text style={styles.bio}>{userData.bio}</Text>
          <Text style={styles.bio}>Gst No: {userData.gstno}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ProfilePage;

