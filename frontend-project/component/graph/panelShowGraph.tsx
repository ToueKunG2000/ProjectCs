import {
  DynamicInputItem,
  GraphLogVesselForm,
  PanelProps,
  VesselForm,
} from "../common/interface";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { LogVesselServices } from "../../services/logVessel.service";
import { useForm } from "react-hook-form";
import DynamicHorizonInput from "./../common/dynamicHorizonInput";
import { Button } from "primereact/button";
import { VesselServices } from "./../../services/vessel.service";
import { useTranslation } from "react-i18next";

interface PanelShowGraph extends PanelProps {}

export const PanelShowGraph = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { t } = useTranslation();

  const labelArray :string[] = [];

  const dataArray : number[] = [];

  const logVesselService = new LogVesselServices();
  const vesselService = new VesselServices();

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<GraphLogVesselForm>({defaultValues: {
    type:"",vesId:1,year:""
  }});

  const typeDropdown = [
    { label: "การรับเบนซิน", value: "getOfBenzine" },
    { label: "การรับดีเซล", value: "getOfDiesel" },
    { label: "การรับกาดิเนีย", value: "getOfGadinia" },
    { label: "การรับเทลลัส", value: "getOfTellus" },
    { label: "การรับน้ำจืด", value: "getOfFreshWater" },
    { label: "การใช้เบนซิน", value: "usedOfBenzine" },
    { label: "การใช้ดีเซล", value: "usedOfDiesel" },
    { label: "การใช้กาดิเนีย", value: "usedOfGadinia" },
    { label: "การใช้เทลลัส", value: "usedOfTellus" },
    { label: "การใช้น้ำจืด", value: "usedOfFreshWater" }, 
    { label: "การจ่ายเบนซิน", value: "giveOfBenzine" },
    { label: "การจ่ายดีเซล", value: "giveOfDiesel" },
    { label: "การจ่ายกาดิเนีย", value: "giveOfGadinia" },
    { label: "การจ่ายเทลลัส", value: "giveOfTellus" },
    { label: "การจ่ายน้ำจืด", value: "giveOfFreshWater" },
    { label: "คงเหลือเบนซิน", value: "leftOfBenzine" },
    { label: "คงเหลือดีเซล", value: "leftOfDiesel" },
    { label: "คงเหลือกาดิเนีย", value: "leftOfGadinia" },
    { label: "คงเหลือเทลลัส", value: "leftOfTellus" },
    { label: "คงเหลือน้ำจืด", value: "leftOfFreshWater" },
];

  const [vesselDropdown, setVesselDropdown] = useState([]);

  const [dataLogVessel, setDataLogVessel] = useState<VesselForm[]>();

  const [isFetchData, setIsFetchData] = useState(false);

  useEffect(() => {
    const getDataDropdown = () => {
      vesselService.getDropdownVessel().then((res) => {
        const data = res.data;
        data.shift();
        setVesselDropdown(data);
      });
    };

    getDataDropdown();
  }, []);

  useEffect(() => {
    const dataType  = getValues("type");
    console.log(t(dataType));
    dataLogVessel?.map((vessel)=>{
        labelArray.push(vessel.monthYear);
        dataArray.push(vessel[`${dataType}`]);
    })
    const data = {
        labels: labelArray,
        datasets: [{
            type: "bar",
            borderWidth: 2,
            minBarLength:10,
            label: `${t(dataType)}`,
            data: dataArray,
        }],
      };

      const options = {
        // responsive: true,
        // maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true,
          },
          

        },
      };
  
      setChartData(data);
      setChartOptions(options);
      setIsFetchData(true);
  },[isFetchData])

  const dynamicInput: DynamicInputItem[] = [
    {
      type: "text",
      label: "ปี",
      fieldID: "year",
      errors: errors["year"],
      inputClassName: "space-bet",
      placeholder:"xxxx" ,
      rules:{
        required:{value: true, message:"กรุณาระบุปี"},
        minLength:{value: 1, message:"กรุณาระบุปี"},
        pattern: {value: /[0-9]{4}/,message:"กรุณาใส่เลข ปี พ.ศ."}
      },
    },
    {
      type: "dropdown",
      label: "ประเภท",
      fieldID: "type",
      errors: errors["type"],
      options: typeDropdown,
      rules:{
        required:{value: true, message:"กรุณาระบุ"}
      },
      inputClassName: "space-bet",
    },
    {
      type: "dropdown",
      label: "เรือ",
      fieldID: "vesId",
      errors: errors["vesId"],
      rules:{
        required:{value: true, message:"กรุณาระบุ"}
      },
      options: vesselDropdown,
      inputClassName: "space-bet",
    },
  ];



  const onSubmitForm = (e: GraphLogVesselForm) => {
    logVesselService.getDataLogVessel(e).then((res) => {
        setDataLogVessel(res.data);
        setIsFetchData(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-column justify-content-center">
          <DynamicHorizonInput
            dynamicInputItems={dynamicInput}
            control={control}
          />
        </div>
        <div className="flex justify-content-center">
        <Button type="submit" label="แสดง" className="p-button-success" />
        </div>
      </form>

      <div className="chart-container">
        <Chart type="bar" width="40%" height="40%" data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
