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
            <div className={`${style ? 'bg-primary' : 'bg-white'} w-100`}>
                <div className="position-relative">
                    <div className={`row rounded gap-0 justify-content-center ${style ? 'text-white' : 'text-primary'}`}>
                        {!isWorks &&
                            (<>
                                <div className="col-3 border-top border-primary text-centerd d-grid text-center py-4 px-0 "><span className="stat-num display-6 fw-bold ">30+</span><small>Brands Managed Across Nigeria</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center py-4 px-0 "><span className="stat-num display-6 fw-bold ">200%</span><small>Profit Increase for Clients</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center py-4 px-0 "><span className="stat-num display-6 fw-bold ">4</span><small>Years of Growth Execution</small></div>
                                <div className="col-3 border-start border-top border-primary text-centerd d-grid text-center py-4 px-0 "><span className="stat-num display-6 fw-bold ">10+</span><small>Skilled Avatas (Human in the loop)</small></div>
                            </>)
                        }

                        {
                            isWorks && milestone?.map((each, inx) => (
                                <div key={inx} className={`col-${12 / milestone.length} border-start border-top border-primary text-centerd d-grid text-center py-4 px-0 `}>
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