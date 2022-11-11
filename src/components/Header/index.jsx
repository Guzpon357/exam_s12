
const Header = ({handleChange}) => {


  return (
    <header className="header w-100">
      <div className="header_elements">
        <div className="header_elements_img">
            <img src="./deadful_tomatoes.png" alt="logo"/>
        </div>
        <div className="header_elements_search">
            <div className="header_elements_search_group">
                <i class="bi bi-search"></i>
                <input placeholder="Titulo" onChange={handleChange}/>
            </div>    
        </div>
      </div>
    </header>
  );
};

export default Header;