import { Panel } from 'primereact/panel';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dispatch, useState } from 'react';
import { SetStateAction } from "react";

interface PanelProps{
    children?:React.ReactNode;
    positionId:number;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
}

const HomepagePanelShow = (props: PanelProps) => {
    const {children, positionId, activeIndex, setActiveIndex}   = props;
    return (
        <>
            { (positionId == 1 || positionId == 2 || positionId == 3) && 
            <>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header={"เรือที่กรอก"}>
                    {children}
                </TabPanel>
            </TabView>
            </> 
            }
            { (positionId == 4 || positionId == 5) && 
            <>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header={"ทั้งหมด"}>
                    {children}
                </TabPanel>
                <TabPanel header={"ยังไม่ดำเนินการ"}>
                    {children}
                </TabPanel>
                <TabPanel header={"กำลังดำเนินการ"}>
                    {children}
                </TabPanel>
                <TabPanel header={"สำเร็จ"}>
                    {children}
                </TabPanel>
            </TabView>
            </>
            }
        </>
    )
}
export default HomepagePanelShow;