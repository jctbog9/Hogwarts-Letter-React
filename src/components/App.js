import React from 'react';
import AcceptanceLetterText from './AcceptanceLetterText';
import RejectionLetterText from './RejectionLetterText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rejected: 0
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };

  handleCheckboxChange(event) {
    this.setState({rejected: this.state.rejected + 1});
  }

  render() {

  let reply;
  if (this.state.rejected % 2 == 0) {
    reply = <AcceptanceLetterText />
  } else {
    reply = <RejectionLetterText />
  }

    return (
      <div>
        <div className="letter-body">
          <div className="small-12 small-centered text-center columns">
            <input type="checkbox" onChange={this.handleCheckboxChange}/>
            <label>
              <h5>Rejected?</h5>
            </label>
          </div>
          <img src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805" id="hogwarts-logo"/>
          <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
          <br />
          <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
          <p id="merlin-order">
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
          </p>
          <br />
          <p>Dear Addressee,</p>
          <div>
            {reply}
          </div>
          <br />
          <p>Yours sincerely,</p>
          <h3>Minerva McGonagall</h3>
          <h3>Deputy Headmistress</h3>
        </div>
      </div>
    );
  };
};

export default App;
