# Décisions du client

Ce que le client a explicitement tranché, avec ses mots. Le système s'y tient : il ne repose pas une question déjà tranchée ici.

```json
{
	"decisions": [
		{
			"kind": "defer",
			"scope": {
				"kind": "question",
				"questionId": "legal-siret"
			},
			"quote": "regarde mon site pour toute information",
			"consequence": "Les mentions légales de votre futur site resteront incomplètes tant que votre numéro SIRET n’aura pas été ajouté. On pourra avancer sur le reste du site, mais il faudra le renseigner avant la mise en ligne définitive."
		},
		{
			"kind": "delegate",
			"scope": {
				"kind": "step",
				"step": "pages"
			},
			"quote": "ok fais toutes les pages",
			"consequence": "Je vais avancer seul sur la définition détaillée de toutes les pages du site, sans vous les reproposer une par une ; vous pourrez bien sûr demander des ajustements ensuite si besoin."
		}
	]
}
```
