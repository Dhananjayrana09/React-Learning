
import './App.css';
import Item  from './components/Item';
import ItemDate from './components/ItemDate';

function App() {

  const response = [
    {
      itemName: "Dhananjay Rana",
      itemDay: "09",
      itemMonth: "November",
      itemYear: "2002"
    },
    {
      itemName: "Rohit Sharma",
      itemDay: "22",
      itemMonth: "june",
      itemYear: "1992"
    },
    
    {
      itemName: "Virat Kohli",
      itemDay: "31",
      itemMonth: "January",
      itemYear: "1994"
    }
  ];
  return (
    <div>
{/* 
      <Item name="Dhananjay Rana"></Item>
      <ItemDate day="09" month="November" year="2002 "></ItemDate>

      <Item name="Rohit Sharma"></Item>
      <ItemDate day="21" month="June" year="1992 "></ItemDate>

      <Item name="Virat Kohli"></Item>
      <ItemDate day="31" month="December" year="1994 "></ItemDate> */}

      {/* More optimize way to do this */}
      {/* Isme hamne props k bare m seekha */}

      <Item name={response[0].itemName}>Hello I am Firt Component </Item>
      <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}>Hello I am Second Component</Item>
      <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}>Hello I am Third Component</Item>
      <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      <div className="App"> Hello Dj </div>
       
    </div>
   
  );
}

export default App;
