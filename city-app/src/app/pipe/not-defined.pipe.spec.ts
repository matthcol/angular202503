import { NotDefinedPipe } from './not-defined.pipe';

describe('NotDefinedPipe', () => {
  it('create an instance', () => {
    const pipe = new NotDefinedPipe();
    expect(pipe).toBeTruthy();
  });
});
