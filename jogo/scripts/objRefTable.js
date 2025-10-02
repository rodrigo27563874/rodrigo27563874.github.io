const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.wrap,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.EightDir
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Física: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{DarAVolta: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{ArrastarSoltar: 0},
	{personagem: 0},
	{caixa: 0},
	{"8Direções": 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	personagem: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {}
}