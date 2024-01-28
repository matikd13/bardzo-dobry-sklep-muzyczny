import strawberry
from strawberry_django.optimizer import DjangoOptimizerExtension
from strawberry.tools import merge_types
import muzyczny.accounts.schema
import muzyczny.products.schema

RootQuery = merge_types("Query", (
    muzyczny.accounts.schema.Query,
    muzyczny.products.schema.Query,
    ))

schema = strawberry.Schema(
    RootQuery,
    extensions=[
        DjangoOptimizerExtension,  # not required, but highly recommended
    ],
)
