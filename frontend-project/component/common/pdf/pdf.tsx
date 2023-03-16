import React, { useEffect } from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Font,
  View,
  Image,
} from "@react-pdf/renderer";
import { ReportName, VesselForm } from "../interface";
import { PdfTable } from "./pdfTable";
import { Button } from "primereact/button";

Font.register({
  family: "sarabun",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf",
      fontWeight: 100,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontWeight: 100,
    fontFamily: "sarabun",
  },
  container: {},
  flex: {
    flexGrow: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  header: {
    fontSize: 15,
    fontWeight: 400,
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
    margin: 5,
    alignSelf: "center",
  },
  text_left: {
    fontSize: 12,
    margin: 5,
    marginLeft: 20,
  },
  // viewer: {
  //   width: window.innerWidth, //the pdf viewer will take up all of the width and height
  //   height: window.innerHeight,
  // },
  logo: {
    marginTop: 10,
    height: "120px",
    width: "100px",
    flexDirection: "row",
    alignSelf: "center",
  },
});

// Create Document Component
const MyDocument = (props: PDFViewProps): JSX.Element => {
  const { data, userList } = props;
  const thisDate = new Date();

  return (
    <Document language="TH">
      {/* render a single page */}
      <Page size="A4" style={[styles.page]}>
        <View style={styles.logo}>
          <Image src={process.env.NEXT_PUBLIC_IMAGE} />
        </View>
        <View>
          <Text style={styles.header}>
            รอบวันที่ {data?.monthYear} | ชื่อเรือ : {data?.vesName}
          </Text>
          <Text style={styles.header}>การใช้งานเครื่องจักรใหญ่/ไฟฟ้า</Text>
          <Text style={styles.text}>
            จำนวนเครื่องจักรใหญ่ {data?.bigMachineNum} เครื่อง
            มีการใช้งานเครื่องจักรใหญ่ {data?.bigMachineUsed} ชั่วโมง
          </Text>
          <Text style={styles.text}>
            จำนวนเครื่องไฟฟ้า {data?.electricMachineNum} เครื่อง
            มีการใช้งานเครื่องไฟฟ้า {data?.electricMachineUsed} ชั่วโมง
          </Text>
        </View>
        <Text style={styles.header}>การใช้งานเครื่องจักร (ชั่วโมง)</Text>

        <View style={[{ margin: 0 }]}>
          <PdfTable
            datas={[
              {
                airCon: data?.airConditioner,
                airCom: data?.airCompressor,
                pump: data?.pump,
                freezer: data?.freezer,
                gear: data?.gear,
              },
            ]}
            headerFixed
            fields={[
              "เครื่องปรับอากาศ",
              "เครื่องอัดลม",
              "ปั้ม",
              "เครื่องทำความเย็น",
              "เกียร์",
            ]}
          />
          <PdfTable
            datas={[
              {
                oilSep: data?.dieselOilSeparator,
                rudder: data?.rudder,
                ship: data?.shipEngine,
                waterPure: data?.waterPurifier,
              },
            ]}
            headerFixed
            fields={[
              "เครื่องแยกน้ำมันดีเซล",
              "เครื่องหางเสือ",
              "เรือยนต์",
              "เครื่องกรองน้ำ",
            ]}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.header}>การรับ-ใช้-จ่ายทรัพยากร</Text>
        </View>
        <View style={[{ margin: 0 }]}>
          <PdfTable
            datas={[
              {
                order: "รับเข้า",
                benzine: data?.getOfBenzine,
                diesel: data?.getOfDiesel,
                gadinia: data?.getOfGadinia,
                tellus: data?.getOfTellus,
                freshwater: data?.getOfFreshWater,
              },
              {
                order: "ใช้",
                benzine: data?.usedOfBenzine,
                diesel: data?.usedOfDiesel,
                gadinia: data?.usedOfGadinia,
                tellus: data?.usedOfTellus,
                freshwater: data?.usedOfFreshWater,
              },
              {
                order: "จ่ายออก",
                benzine: data?.giveOfBenzine,
                diesel: data?.giveOfDiesel,
                gadinia: data?.giveOfGadinia,
                tellus: data?.giveOfTellus,
                freshwater: data?.giveOfFreshWater,
              },
              {
                order: "คงเหลือ",
                benzine: data?.leftOfBenzine,
                diesel: data?.leftOfDiesel,
                gadinia: data?.leftOfGadinia,
                tellus: data?.leftOfTellus,
                freshwater: data?.leftOfFreshWater,
              },
            ]}
            headerFixed
            fields={[
              "รายการ",
              "เบนซิน (ลิตร)",
              "ดีเซล (กิโลลิตร)",
              "กลาดิเนีย (ลิตร)",
              "เทลลัส (ลิตร)",
              "น้ำจืด (ตัน)",
            ]}
          />
        </View>
        <View>
          <Text style={styles.text_left}>ผู้ตรวจสอบ ผบ. กตอ : {userList?.commanderName}</Text>
          <Text style={styles.text_left}>ผู้ตรวจสอบ ผอ. การช่าง : {userList?.technicalName}</Text>
          <Text style={styles.text_left}>ผู้ตรวจสอบ ผู้บังคับการ : {userList?.commandOffName}</Text>
        </View>
      </Page>
    </Document>
  );
};

interface PDFViewProps {
  data: VesselForm;
  userList: ReportName;
}

export const PDFView = ({ data, userList }: PDFViewProps) => (
  <PDFDownloadLink
    document={<MyDocument data={data} userList={userList} />}
    fileName="Report Vessel"
  >
    {({ blob, url, loading, error }) =>
      loading ? (
        <i className="pi pi-spin pi-spinner " style={{ fontSize: "2rem" }}></i>
      ) : (
        <Button className="downloadLog" label="Download" />
      )
    }
  </PDFDownloadLink>
);
