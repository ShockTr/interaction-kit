import { SlashCommand } from "interaction-kit";

function getInviteLink(application) {
	return `https://discord.com/oauth2/authorize?client_id=${application.id}&scope=applications.commands`;
}

export default new SlashCommand({
	name: "invite",
	description: "Get an invite link to add the bot to your server",
	handler: (interaction, application) => {
		interaction.reply({
			message: `[Click here to invite me!](${getInviteLink(application)})`,
			ephemeral: true,
		});
	},
});
