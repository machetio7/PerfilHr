module.exports = {
    hooks: {
        'pre-push': 'npm run lint',
        'pre-commit': 'npm run test',
    },
}