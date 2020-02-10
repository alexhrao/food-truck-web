import React from 'react';
import './App.css';


interface Snapshot {
  src: string,
  time: Date,
}

interface LiveView {
  snap?: Snapshot
  location: string,
  locationName: string,
}

const getViews = async (): Promise<LiveView[]> => {
  return fetch('https://food-truck-spy.appspot.com/api/views')
    .then(r => r.json() as Promise<{ id: string, display: string }[]>)
    .then(views => views.map((v): LiveView => {
      return {
        location: v.id,
        locationName: v.display,
      }
    }));
}

const getView = async (view: string): Promise<Snapshot> => {
    return fetch(`https://food-truck-spy.appspot.com/api/views/${view}`)
      .then(r => r.json() as Promise<{ data?: string, time: string }>)
      .then(json => {
        return {
          src: json.data === undefined ? '' : `data:image/png;base64,${json.data}`,
          time: new Date(json.time),
        }
      });
}

interface LiveViewPoller extends LiveView {
  poller: number,
}

interface AppState {
  views: LiveViewPoller[], 
}

class App extends React.Component<{}, AppState> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      views: [],
    };
    getViews()
      .then(views => views.map((v, i): LiveViewPoller => {
        return {
          ...v,
          poller: window.setInterval(() => {
            getView(v.location)
              .then(snap => {
                const { views } = this.state;
                if (snap.src === "") {
                  views[i].snap = undefined;
                } else {
                  views[i].snap = snap;
                }
                this.setState({ views });
              });
          }, 1000),
        }
      }))
      .then(pollers => this.setState({ views: pollers }));
  }

  public render() {
    const { views } = this.state;
    const containers = views.map(view => {
      if (view.snap === undefined) {
        return (
          <div key={view.location} className="view-container">
            <h2>{view.locationName}</h2>
            <p><em>Loading</em></p>
          </div>
        );
      }
      const img = view.snap === undefined ? <p>Loading</p> : <img src={view.snap.src} alt={`View of ${view.snap.time}`} />
      return (
        <div key={view.location} className="view-container">
          <h2>{view.locationName}</h2>
          {img}
          <p><em>Last Updated: {view.snap.time.toString()}</em></p>
        </div>
      )
    })
    return (
      <div className="App">
        <div className="viewers">
          {containers}
        </div>
      </div>
    );
  }
}

export default App;