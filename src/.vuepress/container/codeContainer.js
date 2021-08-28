const code = codeName => ['container', {
    type: codeName,
    before: name => `<div> <label class="code-label code-label--${codeName}">${name}</label>`,
    after: '</div>',
  }];

module.exports = [code("good"),code("bad")];