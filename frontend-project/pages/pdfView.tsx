import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const InvoicePDF = dynamic(() => import("../component/common/pdf"), {
  ssr: false,

});

const ViewRender = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setClient(true);
    }

    fetchData();
  }, []);
  return (
    <InvoicePDF />
  )
};
export default ViewRender;
