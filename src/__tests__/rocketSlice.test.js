import rocketReducer, { reserve, cancel } from '../features/RocketList/rocketsSlice';

describe('rocket reducer', () => {
  const initialState = {
    rockets: [{ id: 1, name: 'falcon 1' }, { id: 2, name: 'falcon 2' }],
    status: 'idle',
  };
  const initialState1 = {
    rockets: [{ id: 1, name: 'falcon 1', reserved: true }, { id: 2, name: 'falcon 2' }],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(rocketReducer(undefined, { type: 'unknown' })).toEqual({
      rockets: [],
      status: 'idle',
    });
  });

  it('should handle reserve', () => {
    const actual = rocketReducer(initialState, reserve(1));
    expect(actual.rockets).toEqual([{ id: 1, name: 'falcon 1', reserved: true }, { id: 2, name: 'falcon 2' }]);
  });

  it('should handle cancel', () => {
    const actual = rocketReducer(initialState1, cancel(1));
    expect(actual.rockets).toEqual([{ id: 1, name: 'falcon 1', reserved: false }, { id: 2, name: 'falcon 2' }]);
  });
});
