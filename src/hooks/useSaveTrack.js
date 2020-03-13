import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import * as RootNavigation from '../libs/RootNavigation';

export default function() {
  const { state: { tracklist, loading }, createTrack } = useContext(TrackContext);
  const { state: { name, locations }, reset } = useContext(LocationContext);

  async function saveTrack() {
    await createTrack(name, locations);
    reset();
    RootNavigation.navigate('TrackList')
  }

  return [saveTrack, loading]
}