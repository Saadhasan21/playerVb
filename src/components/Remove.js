const initialList = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
  ];
   
  const App = () => {
    const [list, setList] = React.useState(initialList);
   
    return (
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.firstname}</span>
            <span>{item.lastname}</span>
            <span>{item.year}</span>
          </li>
        ))}
      </ul>
    );
  };