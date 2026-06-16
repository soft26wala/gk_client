const icon = new Proxy({"src":"/_astro/icon.DhJtrDxs.png","width":367,"height":281,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/myProject/G K Enterprise/client/src/images/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as i };
