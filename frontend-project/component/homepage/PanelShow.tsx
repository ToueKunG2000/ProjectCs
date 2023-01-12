import { Panel } from 'primereact/panel';
import { TabView, TabPanel } from 'primereact/tabview';
import { useState } from 'react';

interface PanelProps{
    children?:React.ReactNode;
    header?:string;
}

const HomepagePanelShow = (props: PanelProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const {children, header} = props;
    return (
        <>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header={header}>
                    {children}
                </TabPanel>
            </TabView>
        </>
    )
}
export default HomepagePanelShow;