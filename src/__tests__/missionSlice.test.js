import missionReducer, { joinMission, leaveMission } from '../features/Mission/missionSlice';

describe('mission reducer', () => {
  const initialState = {
    missions: [{ id: 1, name: 'Thaicom', reserved: false }, { id: 2, name: 'Telstar', reserved: false }],
  };
  const initialState1 = {
    missions: [{ id: 1, name: 'Thaicom', reserved: true }, { id: 2, name: 'Telstar', reserved: false }],
  };

  it('should handle join mission', () => {
    const actual = missionReducer(initialState, joinMission({ id: 1 }));
    expect(actual.missions).toEqual([{ id: 1, name: 'Thaicom', reserved: true }, { id: 2, name: 'Telstar', reserved: false }]);
  });

  it('should handle cancel', () => {
    const actual = missionReducer(initialState1, leaveMission({ id: 1 }));
    expect(actual.missions).toEqual([{ id: 1, name: 'Thaicom', reserved: false }, { id: 2, name: 'Telstar', reserved: false }]);
  });
});
