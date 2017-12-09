import { ImageUrlPipe } from './image-url.pipe';

describe('ImageUrlPipe', () => {
  let pipe: ImageUrlPipe;

  beforeEach(() => {
    pipe = new ImageUrlPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns a css url', () => {
    const image = 'houses/KEMER.png';
    expect(pipe.transform(image)).toEqual(`url(assets/images/houses/KEMER.png)`);
  });

  it('adds a prefix to a css url', () => {
    const image = 'KEMER.png';
    expect(pipe.transform(image, 'houses/main')).toEqual(`url(assets/images/houses/main/KEMER.png)`);
  });
});
