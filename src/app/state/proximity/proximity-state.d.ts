import Proximity from '../../common/models/proximity/proximity';

export interface ProximityState {
    all: null | Proximity[];
    alarm: null | Proximity;
}
