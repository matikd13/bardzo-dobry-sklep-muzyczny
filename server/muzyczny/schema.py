import strawberry
from strawberry_django.optimizer import DjangoOptimizerExtension
import muzyczny.accounts.schema


class RootQuery(muzyczny.accounts.schema.Query,
                ):
    pass


schema = strawberry.Schema(
    query=RootQuery,

    extensions=[
        DjangoOptimizerExtension,  # not required, but highly recommended
    ],
)