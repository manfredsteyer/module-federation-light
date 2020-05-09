module.exports = {
  name: 'flight-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/flight-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
