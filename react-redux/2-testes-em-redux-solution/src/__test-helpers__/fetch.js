export default {
  successful(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      }),
    );
  },
  failing() {
    return jest.fn().mockImplementation(() =>
      Promise.reject({
        error: 'ops, something went wrong',
      }),
    );
  },
};
