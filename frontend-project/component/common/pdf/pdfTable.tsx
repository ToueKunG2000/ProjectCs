import { View } from "@react-pdf/renderer";
import {
    Page,
    Text,
    Document,
    StyleSheet,
    PDFViewer,
    Font,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";


Font.register({
    family: "sarabun",
    fonts:[
      {src: "https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf", fontWeight:400},
      {src:"https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf", fontWeight:100},
    ]
  });

interface PdfTableProps{
    style?: Style;
    headerFixed: boolean;
    fields: any[];
    datas: any[];
}

const styles = StyleSheet.create({
    table:{
        borderColor: '#000',
        borderWidth:2,
        flexFlow:1,
        margin: 20,
    },
    tableRow:{
        flexDirection: 'row',
    },
    tableCellHeader:{
        borderColor: '#000',
        borderWidth: 1,
        margin:0,
    },
    text:{
        textAlign: 'center',
        margin: 5,
        fontSize: 10,
    }
});

export const PdfTable = ({
    headerFixed = false,
    fields,
    datas,
    style,
} : PdfTableProps ) => (
    <View style={[styles.table]}>
        <View style={[styles.tableRow]} fixed={headerFixed}>
        {fields.map((item, index) => (
            <View key={index} style={[{width: '100%'},styles.tableCellHeader]}>
                <Text style={styles.text}>{item}</Text>
            </View>
        ))}
        </View>
        {datas?.map((item, index) => (
            <View key={index} style={styles.tableRow}>
                {Object.entries(item).map((_item, _id) => (
                    <View key={_id} style={[{width: '100%'},styles.tableCellHeader]}>
                        <Text key={_item[0]} style={styles.text}>{_item[1]}</Text>
                    </View>
                ))}
            </View>
        ))}
    </View>
);