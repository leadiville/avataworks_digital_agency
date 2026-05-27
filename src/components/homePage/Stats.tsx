import { MileStoneT } from "../OurWorks/EachWorks";

type styleT = {
    style?: boolean;
    isWorks?: boolean;
    milestone?: MileStoneT[];
}
const Stats = ({ milestone, style, isWorks }: styleT) => {
    return (
        <div className='container-fluid px-0'>
            {/* STATS */}
            <div className={`${style ? 'bg-primary' : 'bg-white'} w-100 px-4 px-lg-0`}>
                <div className="position-relative">
                    <div className={`row rounded gap-0 justify-content-center py-2 ${style ? 'text-white' : 'text-primary'}`}>
                        {!isWorks &&
                            (<>
                                <div className="col-3 border-top border-primary text-centerd d-grid text-center px-0 "><span className="stat-num display-6 fw-bold ">30+</span><small>Brands Managed</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center px-0 "><span className="stat-num display-6 fw-bold ">200%</span><small>Profit Increase for Clients</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center px-0 "><span className="stat-num display-6 fw-bold ">4yrs</span><small>Growth Execution</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center px-0 "><span className="stat-num display-6 fw-bold ">10+</span><small>Avatas-in-the-Loop</small></div>
                            </>)
                        }
                        {
                            isWorks && milestone?.map((each, inx) => (
                                <div key={inx} className={`col-${12 / milestone.length} border-start border-top border-primary text-centerd d-grid text-center px-0 `}>
                                    <span className="stat-num display-6 fw-bold ">{each?.startTitle}</span><small>{each?.endTitle}</small></div>))
                        }
                    </div>
                </div>
            </div>
            {/* //  <!-- HITL SECTION-- > */}
        </div>
    )
}

export default Stats