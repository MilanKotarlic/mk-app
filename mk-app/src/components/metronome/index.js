import { useMetronome } from 'react-metronome-hook';
import click1 from './clap-1.wav';
import click2 from './click-1.wav';
import click3 from './click-1.wav';
import click4 from './click-1.wav';
import Slider from '@material-ui/core/Slider';
import NumericInput from 'react-numeric-input';

function Metronome() {

  const {
    startMetronome,
    isTicking,
    stopMetronome,
    bpm,
    setBpm,
    setBeatsPerMeasure,
    setSounds
  } = useMetronome(120, 4, [click1, click2]);

  return (
    <div>
      <button onClick={isTicking ? stopMetronome : startMetronome}>
        {isTicking ? "Stop" : "Start"}
      </button>
      <div>{bpm}</div>
			<label>Change Tempo</label>
			<Slider
  		size="small"
			min={1}
			defaultValue={bpm}
  		max={300}
  		aria-label="Small"
  		valueLabelDisplay="auto"
			onChange={(_, value) => setBpm(value)}/>
			<label>Change Measure</label>
			<NumericInput min={0} max={100} defaultValue="4" onChange={(_, value) => setBeatsPerMeasure(value)}/>
      <button onClick={() => setSounds([click3, click4])}>Change sounds</button>
    </div>
  );
}

export default Metronome;