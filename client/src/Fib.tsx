import React from 'react';
import axios from 'axios';

interface FibState {
  seenIndexes: [{ number: number }];
  values: any;
  index: string;
}

interface FibProps {
  none: [];
}

class Fib extends React.Component<FibProps, FibState> {
  constructor(props: FibProps) {
    super(props);
    this.state = {
      seenIndexes: [{ number: 0 }],
      values: {},
      index: ''
    };
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({ seenIndexes: seenIndexes.data });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes = (): string => {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  };

  renderValues = () => {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For Index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index</label>
          <input
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated values</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export { Fib };
