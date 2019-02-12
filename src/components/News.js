import React from 'react'


function News(){
    return(
        <div style={
            {
                marginLeft: "50px",
                
            }
        }>
            <h2 style={{
                background: "#070D35",
                display: "flex",
                justifyContent: "center"
            }}>News</h2>
            <h3>
            <a href="https://www.skysports.com/football/news/11670/11612219/arsenal-suffer-hector-bellerin-injury-blow-against-chelsea">
            Hector Bellerin clutched his left knee and lay in agony on the pitch 
            </a>
            </h3>
            <img src="https://e1.365dm.com/19/01/768x432/skysports-hector-bellerin-arsenal_4551234.jpg?20190119191516" alt="bellerin" />
            
            <div style={{
                width: "90%"
            }}>
                <p>
                
                Bellerin, who was making his first start since suffering a calf injury last month, went down in the second half after overstretching as he tried to dispossess Chelsea's Marcos Alonso.
The full-back clutched his left knee and lay in agony on the pitch before receiving treatment for several minutes from the club's medical staff
                </p>

            </div>
        </div>
    )
}

export default News