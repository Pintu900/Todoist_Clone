import React from 'react'

const Sidebar = ({selectedTab,setSelectedTab}) => {
    return (
        <div className="sidebar">
            <div className={selectedTab==="INBOX"?"active":""} 
            onClick={()=>setSelectedTab("INBOX")}>
            <i className="fas fa-inbox icon"> </i>
                Inbox</div>
            <div className={selectedTab==="TODAY"?"active":""} 
             onClick={()=>setSelectedTab("TODAY")}>
               <i className="far fa-calendar-alt icon"></i>
                Today</div>
            <div className={selectedTab==="NEXT_7"?"active":""} 
            onClick={()=>setSelectedTab("NEXT_7")}> 
            <i className="far fa-calendar icon"></i>
                Next 7 days</div>
            
        </div>
    )
}

export default Sidebar

