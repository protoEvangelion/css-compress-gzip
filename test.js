import test from 'ava';
import liferayCompressCss from '.';

test('title', t => {
	const err = t.throws(() => {
		liferayCompressCss(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(liferayCompressCss('unicorns'), 'unicorns & rainbows');
});
