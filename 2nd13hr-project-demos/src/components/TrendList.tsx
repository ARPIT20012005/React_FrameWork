
const trends =[
  {
  
    title: "Be the Person You Are on Vcation",
    auther: "Maren Torff",

    
  },
  {
    title: "Hate NFT's? Ihave some bad news..", 
    auther:"Zain Levin",
   
  },

  {
  
    title: "The real impact of dark UX Patterns",
    auther: "Lindsey Cuetis",
  }

]
const TrendList = () => {
  return <div className="bg-white p-4 rounded-lg mt-8 ">
    <h3 className="font-semibold text-lg mb-4"> Todys' Top Trends</h3>
    <ul className="space-y-4">
      {trends.map((trend, index) => (
      <li key={index} className="flex flex-col">
        <span className="font-medium">{trend.title}</span>
        <span className="text-sm text-gray-500"> By {trend.auther}</span>

      </li>
    ))
}
    </ul>
  </div>

}

export default TrendList