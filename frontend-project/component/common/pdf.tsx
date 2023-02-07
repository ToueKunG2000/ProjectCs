import React, { useState } from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { useEffect } from "react";
import { VesselForm } from "./interface";


// Create styles
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
const MyDocument = (props: PDFViewProps): JSX.Element => {
  const {data} = props;
  return (
    <Document>
        {/* render a single page */}
        <Page size="A4" style={styles.body}>
          <Text>{data?.monthYear}</Text>
          <Text>{data?.bigMachineUsed}</Text>
          <Text>{data?.electricMachineUsed}</Text>
          <Text>{data?.electricMachineUsed}</Text>
          <Text>{data?.electricMachineUsed}</Text>
          <Text>{data?.electricMachineUsed}</Text>

        </Page>
      </Document>
  );
};

interface PDFViewProps{
    data: VesselForm;
}

const PDFView = (props: PDFViewProps) => {
  const {data} = props;
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);

  }, []);

  return (
    <>
        <PDFViewer style={styles.viewer}>
            <MyDocument data={data}/>
        </PDFViewer>
    </>
  );
}
export default PDFView;
