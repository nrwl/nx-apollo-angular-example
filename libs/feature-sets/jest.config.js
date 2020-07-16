module.exports = {
  name: 'feature-sets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-sets',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
