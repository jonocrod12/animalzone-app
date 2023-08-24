import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

// Document style
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
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
          {/* Renderiza el contenido de la vista actual aquí */}
          <Text style={styles.header}>Welcome to My App</Text>
          <View>
            {/* Puedes agregar más componentes aquí para tu contenido */}
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
        {/* Utiliza PDFDownloadLink para descargar el PDF generado */}
        <PDFDownloadLink document={<PDFContent />} fileName="my_app_report.pdf">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PdfGenerator;
