import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadScreen() {
  const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentResult | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
      });
      
      if (result.assets && result.assets.length > 0) {
        setSelectedFile(result);
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile?.assets?.[0]) return;

    try {
      setUploading(true);
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.back();
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#1e293b" />
            <Text style={styles.backText}>Back to Records</Text>
          </Pressable>
          <Text style={styles.title}>Upload Medical Record</Text>
        </View>

        <View style={styles.uploadContainer}>
          <View style={styles.uploadArea}>
            <Pressable onPress={handleFilePick} style={styles.dropZone}>
              <View style={styles.uploadIcon}>
                <Ionicons name="cloud-upload" size={48} color="#2563eb" />
              </View>
              <Text style={styles.uploadText}>
                {selectedFile?.assets?.[0]
                  ? `Selected: ${selectedFile.assets[0].name}`
                  : 'Drag and drop files here or click to browse'}
              </Text>
              <Text style={styles.uploadSubtext}>
                Supported formats: PDF, Images (up to 10MB)
              </Text>
            </Pressable>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Record Details</Text>
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Record Type</Text>
                <View style={styles.select}>
                  <Text style={styles.selectText}>Select record type</Text>
                  <Ionicons name="chevron-down" size={20} color="#64748b" />
                </View>
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Date of Record</Text>
                <View style={styles.select}>
                  <Text style={styles.selectText}>Select date</Text>
                  <Ionicons name="calendar" size={20} color="#64748b" />
                </View>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <View style={styles.textarea}>
                  <Text style={styles.placeholderText}>
                    Add any additional notes about this record...
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Pressable
            onPress={handleUpload}
            disabled={!selectedFile || uploading}
            style={[
              styles.uploadButton,
              (!selectedFile || uploading) && styles.uploadButtonDisabled,
            ]}>
            <Text style={styles.uploadButtonText}>
              {uploading ? 'Uploading...' : 'Upload Record'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    width: '100%',
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#1e293b',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  uploadContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  uploadArea: {
    marginBottom: 32,
  },
  dropZone: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  uploadIcon: {
    marginBottom: 16,
  },
  uploadText: {
    fontSize: 18,
    color: '#1e293b',
    textAlign: 'center',
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
  },
  formSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 24,
  },
  form: {
    gap: 24,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  selectText: {
    fontSize: 16,
    color: '#64748b',
  },
  textarea: {
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    minHeight: 100,
  },
  placeholderText: {
    fontSize: 16,
    color: '#64748b',
  },
  uploadButton: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonDisabled: {
    backgroundColor: '#94a3b8',
  },
  uploadButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});