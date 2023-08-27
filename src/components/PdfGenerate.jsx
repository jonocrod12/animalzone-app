import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

// Document style
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

const PdfGenerator = () => {
  const [data] = useState('el angel es una rata');

  const PDFContent = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Welcome to My App</Text>
          <View>
            <Text>Este es un ejemplo de contenido.</Text>
            <Text>{data}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div>
        <PDFDownloadLink document={<PDFContent />} fileName="my_app_report.pdf">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PdfGenerator;
